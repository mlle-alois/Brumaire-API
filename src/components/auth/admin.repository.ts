import { ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Admin } from './admin.entity';

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  async signUp(email: string, password: string): Promise<void> {
    const admin = new Admin();
    admin.email = email;
    admin.password = password;

    try {
      await admin.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email Already Exists!');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(email: string): Promise<{ id: number, email: string, password: string }> {
    const admin = await Admin.findOne({ email });
    if (!admin) throw new NotFoundException('Admin not found.');
    return admin;
  }
}

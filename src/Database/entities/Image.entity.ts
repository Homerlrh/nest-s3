import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 6, unique: true })
  identifier: string;

  @Column('text')
  fileName: string;

  @Column({ default: 1 })
  numberOfDownloads: number;

  @Column()
  isActive: boolean;
}

import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LeadsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createLeadDto: CreateLeadDto) {
    const lead = await this.prismaService.lead.create({
      data: {
        id: crypto.randomUUID(),
        name: createLeadDto.name,
        email: createLeadDto.email,
        documentType: createLeadDto.documentType,
        documentNumber: createLeadDto.documentNumber.toString(),
        createdAt: new Date(),
      },
    });

    return lead.id;
  }

  findAll() {
    return this.prismaService.lead.findMany();
  }
}

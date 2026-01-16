import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { Lead } from './entities/lead.entity';

@Injectable()
export class LeadsService {
  private leads: Lead[] = [];

  create(createLeadDto: CreateLeadDto) {
    const lead = new Lead(
      createLeadDto.name,
      createLeadDto.email,
      createLeadDto.documentType,
      createLeadDto.documentNumber,
    );

    this.leads.push(lead);
    return lead.id;
  }

  findAll() {
    return this.leads;
  }
}

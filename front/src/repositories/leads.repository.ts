import { CreateLeadDTO } from "../entities/CreateLeadDTO";

export const leadsRepository = {
    createLead: async (lead: CreateLeadDTO): Promise<string> => {
        const response = await fetch(`${process.env.API_URL}/leads`, {
            method: 'POST',
            body: JSON.stringify(lead),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.text();
        return data;
    },
}
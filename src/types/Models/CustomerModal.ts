export interface CustomerModel {
    id: string;
    nome: string;
    nomeFantasia: string;
    tipoCliente: string;
    endereco: string;
    bairro: string;
    cidade: string;
    cep: string;
    telefone: string;
    email: string;
    nomeContato?: string;
    telefoneContato?: string;
    cnpj: string;
    desconto: number;
    createdAt: string;
    updatedAt: string;
}
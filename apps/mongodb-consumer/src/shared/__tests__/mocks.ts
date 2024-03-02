import { Model } from 'mongoose';
import { ContactsService } from '../../infra/database/contact/services/contacts.service';
import { Contact } from '../../infra/database/contact/schemas/contact.schema';

const contactModel: Pick<Model<Contact>, 'findOne' | 'create'> = Object.freeze({
  findOne: jest.fn(),
  create: jest.fn(),
});

export const contactServiceMock: ContactsService = new ContactsService(
  contactModel,
);

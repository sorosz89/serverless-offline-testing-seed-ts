import { server } from '../helpers/endpoint';
import { StatusCodes } from 'http-status-codes';

describe('The deployed function should be available through the api', () => {
  it('should trigger hello function', async () => {
    const { status } = await server.get('/');
    expect(status).toBe(StatusCodes.OK);
  });
});

describe('GET /api/users', () => {
  it('should return a success message', async () => {
    const res = await fetch('http://localhost:3000/api/users');
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual({ message: 'GET request successful' });
  }, 15000); 
});

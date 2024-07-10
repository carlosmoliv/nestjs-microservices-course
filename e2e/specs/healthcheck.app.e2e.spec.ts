describe('Health', () => {
  test('Reservations endpoint', async () => {
    const response = await fetch('http://reservations:3000');

    expect(response.ok).toBeTruthy();
  });
});

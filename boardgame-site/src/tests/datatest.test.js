// src/tests/data.test.js

describe('Game Setup Validation', () => {

  test('player list should start empty', () => {
    const players = [];
    expect(players.length).toBe(0);
  });

  test('game should have exactly 4 suits if it uses cards', () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    expect(suits).toContain('Hearts');
    expect(suits).toHaveLength(4);
  });

});
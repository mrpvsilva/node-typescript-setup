import { User } from '@models/User'

it('it should be success', () => {
  const user = new User()
  user.name = 'Paulo'
  expect(user.name).toBe('Paulo')
})

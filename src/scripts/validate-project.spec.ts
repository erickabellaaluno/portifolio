import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/db/projects', () => ({
  primitiveProjects: [
    {
      slug: 'test-project',
    },
  ],
}))

const existsSyncMock = vi.fn()

vi.mock('fs', () => ({
  default: {
    existsSync: existsSyncMock,
  },
}))

vi.mock('path', () => ({
  default: {
    join: (...args: string[]) => args.join('/'),
  },
}))

describe('validate-project script', () => {
  const consoleErrorSpy = vi
    .spyOn(console, 'error')
    .mockImplementation(() => {})
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  vi.spyOn(process, 'exit').mockImplementation(
    (code?: string | number | null | undefined) => {
      throw new Error(`process.exit:${code}`)
    },
  )

  beforeEach(() => {
    vi.resetModules()
    existsSyncMock.mockReset()
    consoleErrorSpy.mockClear()
    consoleLogSpy.mockClear()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('exits with error when markdown files are missing', async () => {
    existsSyncMock.mockReturnValue(false)

    await expect(async () => {
      await import('@/scripts/validate-projects')
    }).rejects.toThrow('process.exit:1')

    expect(consoleErrorSpy).toHaveBeenCalled()
  })

  it('logs success when all files exist', async () => {
    existsSyncMock.mockReturnValue(true)

    await import('@/scripts/validate-projects')

    expect(consoleLogSpy).toHaveBeenCalledWith(
      '✅ All project markdown files exist',
    )
  })
})

// import { describe, expect, it } from 'vitest'

// describe('Validate Project', () => {
//   it('Should behave correctly when both isSubmitting and isSubmitSuccessful are false', () => {
//     // Act
//     const wrapper = render(
//       <Button isSubmitting={false} isSubmitSuccessful={false}>
//         Click me!
//       </Button>,
//     )

//     const button = wrapper.getByRole('button', { name: /click me!/i })
//     const icon = button.firstElementChild

//     // Assert
//     expect(button).toBeInTheDocument()
//     expect(button).not.toHaveAttribute('disabled')
//     expect(icon).toBeInTheDocument()
//     expect(icon).toHaveClass('lucide', 'lucide-arrow-right')
//   })

//   it('Should behave correctly when isSubmitting is true and isSubmitSuccessful is false', () => {
//     // Act
//     const wrapper = render(
//       <Button isSubmitting={true} isSubmitSuccessful={false}>
//         Click me!
//       </Button>,
//     )

//     const button = wrapper.getByRole('button', { name: /click me!/i })
//     const icon = button.firstElementChild

//     // Assert
//     expect(button).toBeInTheDocument()
//     expect(button).toHaveAttribute('disabled')
//     expect(icon).toBeInTheDocument()
//     expect(icon).toHaveClass('lucide', 'lucide-loader-circle')
//   })

//   it('Should behave correctly when isSubmitting is false and isSubmitSuccessful is true', () => {
//     // Act
//     const wrapper = render(
//       <Button isSubmitting={false} isSubmitSuccessful={true}>
//         Click me!
//       </Button>,
//     )

//     const button = wrapper.getByRole('button', { name: /click me!/i })
//     const icon = button.firstElementChild

//     // Assert
//     expect(button).toBeInTheDocument()
//     expect(button).toHaveAttribute('disabled')
//     expect(icon).toBeInTheDocument()
//     expect(icon).toHaveClass('lucide', 'lucide-circle-check')
//   })

//   it('Should behave correctly when both isSubmitting and isSubmitSuccessful are true', () => {
//     // Act
//     const wrapper = render(
//       <Button isSubmitting={true} isSubmitSuccessful={true}>
//         Click me!
//       </Button>,
//     )

//     const button = wrapper.getByRole('button', { name: /click me!/i })
//     const icon = button.firstElementChild

//     // Assert
//     expect(button).toBeInTheDocument()
//     expect(button).toHaveAttribute('disabled')
//     expect(icon).toBeInTheDocument()
//     expect(icon).toHaveClass('lucide', 'lucide-loader-circle')
//   })
// })

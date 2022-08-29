import * as S from './styles'

const Main = ({
  title = 'Advanced React',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image of an atom and Advanced React written on the side."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer in front of the screen with code"
    />
  </S.Wrapper>
)
export default Main

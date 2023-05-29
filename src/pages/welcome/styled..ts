import { MoviesListImg } from '@assets/pages'
import Button from '@components/Button'
import TextField from '@components/TextField'
import styled from '@emotion/styled'

interface IContainer {}

export const Container = styled.div<IContainer>`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: black;
	background: rgba(0, 0, 0, 0.5) url(${MoviesListImg});
	background-size: cover;
	background-position: center;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;

    padding: 18% 25%;
	background-color: rgba(0, 0, 0, 0.7);

    gap: 10rem;
    
`

export const StyledTextField=styled(TextField)`
border-radius: 10rem 0rem 0rem 10rem;

`

export const StyledButton = styled(Button)`
	height: 50rem;
    border-radius: 0rem 10rem 10rem 0rem;
`

import {useEffect, useContext} from 'react'
import numberContext from './numberContext'


export default () => {
	const {myNumber} = useContext(numberContext)
	return <h1>Number: {myNumber}</h1>
}
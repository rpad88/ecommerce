import { Button, Form, InputGroup, Stack } from 'react-bootstrap'
import './style.css'
import {
	FaRegCreditCard,
	FaCreditCard,
	FaPix,
	FaBarcode,
} from 'react-icons/fa6'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../../contexts/ShoppingCart.context'


export default function CheckoutFormComponent() {
    const [option, setOption] = useState()
    const { cartQuantity, cartTotal } = useContext(ShoppingCartContext)

    const MoneyFormatter = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})

    const handleChange = (e) => {
        setOption(e.target.id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Sua compra de ${cartQuantity} iten(s) deu um valor total de ${MoneyFormatter.format(cartTotal)} | Opção de pagamento: ${option.toUpperCase()}`)
    }


	return (
		<Form className="d-flex flex-column">
			<legend className="mb-4">Como gostaria de pagar?</legend>
			<Stack gap={1}>
				<Form.Label
					htmlFor="credito"
					className="border d-flex align-items-center w-100 d-flex p-2 bg-white"
				>
					<InputGroup className="d-flex gap-4 align-items-center">
						<Form.Check
							name="pagamento"
							type="radio"
							id="credito"
							aria-label="credito"
                            onChange={handleChange}
                            checked={option === 'credito'}
						/>
						<i
							style={{
								backgroundColor: '#F0F0F0',
								padding: '1rem',
								borderRadius: '50%',
							}}
						>
							<FaRegCreditCard fill="#0096FF" size={28} />
						</i>
						<span>Cartão de Crédito</span>
					</InputGroup>
				</Form.Label>

				<Form.Label
					htmlFor="debito"
					className="border d-flex align-items-center w-100 d-flex p-2 bg-white"
				>
					<InputGroup className="d-flex gap-4 align-items-center">
						<Form.Check
							name="pagamento"
							type="radio"
							id="debito"
							aria-label="debito"
                            onChange={handleChange}
                            checked={option === 'debito'}
						/>
						<i
							style={{
								backgroundColor: '#F0F0F0',
								padding: '1rem',
								borderRadius: '50%',
							}}
						>
							<FaCreditCard fill="blue" size={28} />
						</i>
						<span>Cartão de Débito</span>
					</InputGroup>
				</Form.Label>
				<Form.Label
					htmlFor="pix"
					className="border d-flex align-items-center w-100 d-flex p-2 bg-white"
				>
					<InputGroup className="d-flex gap-4 align-items-center">
						<Form.Check
							name="pagamento"
							type="radio"
							id="pix"
							aria-label="pix"
                            onChange={handleChange}
                            checked={option === 'pix'}
						/>
						<i
							style={{
								backgroundColor: '#F0F0F0',
								padding: '1rem',
								borderRadius: '50%',
							}}
						>
							<FaPix fill="#40B5AD" size={28} />
						</i>
						<span>Pix</span>
					</InputGroup>
				</Form.Label>
				<Form.Label
					htmlFor="boleto"
					className="border d-flex align-items-center w-100 d-flex p-2 bg-white"
				>
					<InputGroup className="d-flex gap-4 align-items-center">
						<Form.Check
							name="pagamento"
							type="radio"
							id="boleto"
							aria-label="boleto"
                            onChange={handleChange}
                            checked={option === 'boleto'}
						/>
						<i
							style={{
								backgroundColor: '#F0F0F0',
								padding: '1rem',
								borderRadius: '50%',
							}}
						>
							<FaBarcode fill="#0096FF" size={28} />
						</i>
						<span>Boleto</span>
					</InputGroup>
				</Form.Label>
			</Stack>
			<Button type="submit" onClick={handleSubmit} className="mt-3 ms-auto">
				Realizar pagamento
			</Button>
		</Form>
	)
}

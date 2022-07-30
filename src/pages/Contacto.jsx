import '../contacto.css'
import { Link } from "react-router-dom" ;
import styled from 'styled-components';

const Contacto = () => {
  return (
    <div className='formulario'>
    <div className="wrapper">
			<div className="inner">
				<form action="">
					<h3>¡Contáctanos!</h3>
					<p>¿Tienes alguna duda?, ¿Sugerencia?, ¿Te enamoraste de algún plato?. ¡Déjanos tus comentarios!</p>
					<label className="form-group">
						<input type="text" className="form-control"  required/>
						<span>Nombre</span>
						<span className="border"></span>
					</label>
					<label className="form-group">
						<input type="text" className="form-control"  required/>
						<span for="">Email</span>
						<span className="border"></span>
					</label>
					<label className="form-group" >
						<textarea name="" id="" className="form-control" required></textarea>
						<span for="">Mensaje</span>
						<span className="border"></span>
					</label>
					<div className="buttons">
					<button className='button'>Enviar 
						<i className="zmdi zmdi-arrow-right"></i>
					</button>
					<Button className='button' to={"/"} >Volver al inicio</Button>
					</div>
				</form>
			</div>
		</div>
        </div>
  )
}

const Button = styled(Link)`
`
export default Contacto
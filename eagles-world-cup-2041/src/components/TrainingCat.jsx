import './styles/TrainingCat.css'
export default function TrainingCat({name, pigment, color="white", image}){
    return(
        <section className='card'>
            <h3 className='catTitle' style={{backgroundColor: pigment, color: color}}>{name}</h3>
            <img src={image} alt="" />
        </section>
    )
}
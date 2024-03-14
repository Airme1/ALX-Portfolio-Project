import './styles/TrainingCat.css'
export default function TrainingCat({name, pigment, image}){
    return(
        <section className='card'>
            <h3 className='catTitle' style={{backgroundColor: pigment}}>{name}</h3>
            <a href=""><img src={image} alt="" /></a>
        </section>
    )
}
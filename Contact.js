
const Contact = (props) =>
{
    return(<div className="contact-card">
    <img src={props.img}/>
    <h3>{props.name}</h3>
    <div className="info-group">
        <p>{props.number}</p>
    </div>
    <div className="info-group">
        <p>{props.email}</p>
    </div>
</div>
)
}

export default Contact;
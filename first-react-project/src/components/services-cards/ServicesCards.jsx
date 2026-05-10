function ServicesCard(card){
    return (
        <>
            <div className="services-card">
                <img className="services-img" width={100} height={100} src={card.image} alt="" />
                <h3>{card.cardTopic}</h3>
                <p>{card.cardInfo}</p>
                <a className="services-more" href="">Learn More</a>
            </div>
        </>
    )
}

export default ServicesCard;
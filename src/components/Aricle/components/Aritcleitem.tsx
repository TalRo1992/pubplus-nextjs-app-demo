const Aritcleitem = ({ item }: any) => {
    return (
        <div className='item-containter'>
            <h2>{item.title}</h2>
            <div className="item-image">
                <p>{item.pre_image_text}</p>
                <img src={item.image_url} alt="item Image" />
                <small>{item.caption_description}</small>
                <p>{item.post_image_text}</p>
            </div>
        </div>
    )
}

export default Aritcleitem
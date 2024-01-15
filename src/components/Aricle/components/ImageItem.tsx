import Image from "next/image"


const ImageItem = () => {
    return (
        <div>
            <p>Pre image text</p>
            <img src={"hhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3jR7oK6jj21yg2hchxchZu&ust=1704895879932000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOi4q5y-0IMDFQAAAAAdAAAAABAE"} width={200} height={200} alt={""}/>
            <small>Caption url</small>
            <p>Post image text</p>
        </div>
    
    )
}

export default ImageItem
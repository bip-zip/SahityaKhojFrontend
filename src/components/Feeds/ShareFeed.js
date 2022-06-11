import React from 'react'
import toast from 'react-hot-toast';
import { FacebookShareButton, FacebookIcon } from "react-share";


function ShareFeed({feed}) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText('www.sahityakhoj.com/feed/'+feed._id);
        toast.success("Link copied", { position: 'top-left' })
    }



    return (
        <>
            <div className="modal fade" id={"exampleModalshare"+feed._id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><i className="fa fa-share-square-o fs-4 text-purple"></i>&nbsp; Share feed</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row p-1'>
                                <div className='col-md-6  text-center '>
                                    <FacebookShareButton
                                        url={"http://www.sahityakhoj.com/feed/"+feed._id}
                                        quote={feed.title + " " + feed.content }
                                        hashtag={"#"+feed.category}
                                    // className={classes.socialMediaButton}
                                    >
                                        <i className="fa-brands fa-facebook text-primary fs-1"></i>
                                        <p>Facebook</p>

                                    </FacebookShareButton>
                                </div>
                                {/* <div className='col-md-4  text-center'>
                                    <i className="fa-brands fa-twitter text-info fs-1"></i>


                                </div> */}
                                <div className='col-md-6  text-center' onClick={copyToClipboard} style={{ 'cursor': "pointer" }}>
                                    <i class="fa-solid fa-copy text-secondary fs-1"></i>
                                    <p>Copy link</p>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}
export default ShareFeed
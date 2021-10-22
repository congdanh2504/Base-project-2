import React from 'react'
import ReactLoading from 'react-loading';

function Loading() {
    return (
        <div>
            <div style={{ "height": "100vh" }}>
                <div class="d-flex align-items-center flex-column justify-content-center h-100 text-white" >
                    <ReactLoading type={"bars"} color={'#0061FF'} height={'10%'} width={'10%'} />
                </div>
            </div>
        </div>
    )
}

export default Loading
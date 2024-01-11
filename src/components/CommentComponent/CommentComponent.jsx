import React from 'react'

const CommentComponent = (props) => {
  const {dataHref, width} = props
  return (
    <div style={{margin: '-10px -12px 0'}}>
     <div className="fb-like" data-href={dataHref} data-width={width} data-layout="" data-action="" data-size="" data-share="true"></div>

    </div>
  )
}

export default CommentComponent
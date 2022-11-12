import React from 'react'

const ContactItem = ({title, content, url, cta, children}) => {
    return (
        <article className='contact-item'>
            {children} {/* Icon */}
            <h4>{title}</h4>
            <h5> <a href={url} target='_blank'>{content}</a> </h5>
            <a href={url}>{cta}</a>
        </article>

    )
}

export default ContactItem

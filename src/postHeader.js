import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

export default function PostHeader(props) {
  return (
    <>
      <strong>
        {props.post.read ? <s>{props.post.title}</s> : props.post.title}
        <Button onClick={() => props.onRemove(props.post.id)}>Remover</Button>
      </strong>
    </>
  );
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};

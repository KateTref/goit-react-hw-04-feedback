import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      {title && <h1 className={css.title}>{title}</h1>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;

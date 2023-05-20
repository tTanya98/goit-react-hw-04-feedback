import sty from './Section.module.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section className={sty.section}>
      <h2 className={sty.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;
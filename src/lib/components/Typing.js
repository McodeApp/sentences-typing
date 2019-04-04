import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Typing extends Component {
    state = {
        currentIndex: 1,
        firstRow: '',
        secondRow: '',
        firstRowFinish: false,
        typeSpeed: 100,
    };

    componentDidMount() {
        this.type();
    }

    type = () => {
        const {currentIndex, firstRowFinish, secondRow, typeSpeed, firstRow} = this.state;
        const {sentences, infinity} = this.props;
        let options = {};

        if (sentences.length === 1 && firstRowFinish) {
            return;
        }

        if (currentIndex === sentences.length - 1 && secondRow === sentences[currentIndex]) {
            if (infinity) {
                options = {
                    currentIndex: 1,
                    secondRow: '',
                }
            } else {
                return;
            }
        }

        if (!firstRowFinish && sentences.length) {
            const [first] = sentences;
            const firstRowText = first.substring(0, firstRow.length + 1);
            options ={
                firstRow: firstRowText,
                firstRowFinish: first.length === firstRow.length,
            };
        } else if (currentIndex < sentences.length) {
            if (secondRow.length !== sentences[currentIndex].length) {
                const secondRowText = sentences[currentIndex].substring(0, secondRow.length + 1);
                options = {
                    secondRow: secondRowText,
                    currentIndex: currentIndex,
                };
            } else {
                const index = currentIndex < sentences.length -1 ? currentIndex + 1 : 1;
                options = {
                    secondRow: '',
                    currentIndex: index,
                };
            }
        }

        this.setState(options);
        setTimeout(this.type, typeSpeed);
    };

    render() {
        const {firstRow, secondRow} = this.state;
        return (
            <div>
                <h1>{firstRow}</h1>
                {secondRow && <h1>{secondRow}</h1>}
            </div>
        );
    }
}

Typing.propTypes = {
    infinity: PropTypes.bool,
    sentences: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Typing.defaultProps = {
    infinity: false,
};

export default Typing;

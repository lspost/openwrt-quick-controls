import React from 'react';

class MacAddressInput extends React.Component {
  addColons = (left, right) => {
    let newLeft = '';
    let newRight = '';
    let overallPosition = 0;

    if (left && left.length > 0) {
      left.split('').forEach(char => {
        newLeft += char;
        overallPosition++;

        if (overallPosition % 2 === 0) {
          newLeft += ':';
        }
      });
    }

    if (right && right.length > 0) {
      right.split('').forEach(char => {
        newRight += char;
        overallPosition++;

        if (overallPosition % 2 === 0) {
          newRight += ':';
        }
      });
    }

    return [newLeft, newRight];
  };

  handleChange = async (e, delOrBack) => {
    const input = e.target;
    const inputValue = input.value.toLowerCase();
    const cursorPos = input.selectionStart;
    const re = /[^a-f0-9]*/g;

    //Ignore input if it would exceed full address length
    if (inputValue.trim() > 17) {
      return;
    }

    let leftOfCursor = inputValue.slice(0, cursorPos);
    let rightOfCursor = inputValue.slice(cursorPos, inputValue.length);

    if (delOrBack) {
      switch (delOrBack) {
        case 'backspace':
          leftOfCursor = leftOfCursor.slice(0, leftOfCursor.length - 2);
          break;
        case 'delete':
          rightOfCursor = rightOfCursor.slice(2, rightOfCursor.length);
          break;
      }
    }

    const [left, right] = this.addColons(
      leftOfCursor.replace(re, ''),
      rightOfCursor.replace(re, '')
    );

    let newValue = left + right;
    if (newValue.length > 17) {
      newValue = newValue.slice(0, 17);
    }

    await this.props.handleOnChange('address', newValue, this.props.index);
    input.selectionStart = left.length;
    input.selectionEnd = left.length;

    /*
    this.setState(
      () => ({ inputValue: newValue }),
      () => {
        input.selectionStart = left.length;
        input.selectionEnd = left.length;
        if (this.props.handleOnChange) {
          this.props.handleOnChange(
            'address',
            this.state.inputValue,
            this.props.index
          );
        }
      }
    ); */
  };

  handleKeyDown = e => {
    // If a backspace or delete is performed on a colon, do some extra processing here
    // and call handleChange directly

    if (
      (e.keyCode === 8 || e.keyCode === 46) &&
      e.target.selectionStart === e.target.selectionEnd
    ) {
      if (
        e.keyCode === 8 &&
        e.target.value[e.target.selectionStart - 1] === ':'
      ) {
        this.handleChange(e, 'backspace');
        e.preventDefault();
      }

      if (e.keyCode === 46 && e.target.value[e.target.selectionStart] === ':') {
        this.handleChange(e, 'delete');
        e.preventDefault();
      }
    }
  };

  render() {
    return (
      <div key={this.props.index} className="col s12 m6">
        <label>Address</label>
        <input
          type="text"
          value={this.props.value}
          onChange={e => this.handleChange(e)}
          onKeyDown={this.handleKeyDown}
          spellCheck={false}
        />
      </div>
    );
  }
}

export default MacAddressInput;

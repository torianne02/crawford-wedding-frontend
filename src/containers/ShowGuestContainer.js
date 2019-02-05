import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGuestList } from '../actions/guestListActions';
import GuestCarousel from '../components/carousel/GuestCarousel';

class ShowGuestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.guestList.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex
    });
  }

  prev() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.guestList.length - 1 : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex
    });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex
    })
  }

  componentDidMount() {
    this.props.fetchGuestList()
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <GuestCarousel
        onExiting={ this.onExiting }
        onExited={ this.onExited }
        activeIndex={ activeIndex }
        next={ this.next }
        prev={ this.prev }
        goToIndex={ this.goToIndex }
        guestList={ this.props.guestList }
      />
    )
  }
}

const mapStateToProps = state => {
  return { guestList: state.guestList }
}

// const mapDispatchToProps = dispatch => {
//   return { fetchGuestList: () => dispatch( fetchGuestList() )}
// }

export default connect(mapStateToProps, { fetchGuestList })(ShowGuestContainer)

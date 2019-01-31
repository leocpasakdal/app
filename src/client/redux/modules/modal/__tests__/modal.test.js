import { reducer, actions } from '..';

describe('modal reducer', () => {
  it('contains the expected initial state', () => {
    const actualState = reducer(undefined, {});

    expect(actualState).toEqual({
      modalContent: {},
      modalType: '',
      show: false
    });
  });

  describe('closeModal', () => {
    it('sets show to false', () => {
      const result = reducer({ show: true }, actions.closeModal());

      expect(result).toEqual({
        show: false
      });
    });
  });

  describe('showModal', () => {
    it('sets show to true, modalTYpe and modalContentValue', () => {
      const result = reducer(
        { show: false },
        actions.showModal({
          modalType: 'modalTypeValue',
          modalContent: 'modalContentValue'
        })
      );

      expect(result).toEqual({
        show: true,
        modalType: 'modalTypeValue',
        modalContent: 'modalContentValue'
      });
    });
  });
});

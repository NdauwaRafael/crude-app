/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 7/13/2020 at 6:11 PM
 **/

import moment from 'moment';
import numeral from 'numeral';

export const getInitial = (name) => {
  if (name) {
    if (name.length > 0) {
      return name[0];
    }

    return null;
  }

  return null;
};

export const formatDate = (date) => {
  return moment(date).format('MMM, D YYYY');
};

export const formatCurrency = (amount) => {
  return numeral(amount).format('0,0');
};

export const getTime = (date) => {
  return moment(date).fromNow();
};

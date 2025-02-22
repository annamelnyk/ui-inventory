import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import {
  Icon,
  TextField
} from '@folio/stripes/components';

import RepeatableField from '../components/RepeatableField';

const PublicationRangeFields = props => {
  const {
    canAdd,
    canEdit,
    canDelete,
  } = props;

  return (
    <RepeatableField
      name="publicationRange"
      label={<FormattedMessage id="ui-inventory.publicationRange" />}
      addLabel={
        <Icon icon="plus-sign">
          <FormattedMessage id="ui-inventory.addPublicationRange" />
        </Icon>
      }
      addButtonId="clickable-add-publicationfrequency"
      template={[{
        label: <FormattedMessage id="ui-inventory.publicationRange" />,
        component: TextField,
        disabled: !canEdit,
      }]}
      canAdd={canAdd}
      canDelete={canDelete}
    />
  );
};

PublicationRangeFields.propTypes = {
  canAdd: PropTypes.bool,
  canEdit: PropTypes.bool,
  canDelete: PropTypes.bool,
};
PublicationRangeFields.defaultProps = {
  canAdd: true,
  canEdit: true,
  canDelete: true,
};

export default PublicationRangeFields;

import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import {
  Icon,
  TextField,
} from '@folio/stripes/components';

import RepeatableField from '../components/RepeatableField';

const PublicationFields = props => {
  const {
    canAdd,
    canEdit,
    canDelete,
  } = props;

  return (
    <RepeatableField
      name="publication"
      label={<FormattedMessage id="ui-inventory.publications" />}
      addLabel={
        <Icon icon="plus-sign">
          <FormattedMessage id="ui-inventory.addPublication" />
        </Icon>
      }
      addButtonId="clickable-add-publication"
      template={[
        {
          name: 'publisher',
          label: <FormattedMessage id="ui-inventory.publisher" />,
          component: TextField,
          disabled: !canEdit,
        },
        {
          name: 'role',
          label: <FormattedMessage id="ui-inventory.publisherRole" />,
          component: TextField,
          disabled: !canEdit,
        },
        {
          name: 'place',
          label: <FormattedMessage id="ui-inventory.place" />,
          component: TextField,
          disabled: !canEdit,
        },
        {
          name: 'dateOfPublication',
          label: <FormattedMessage id="ui-inventory.dateOfPublication" />,
          component: TextField,
          disabled: !canEdit,
        },
      ]}
      canAdd={canAdd}
      canDelete={canDelete}
    />
  );
};

PublicationFields.propTypes = {
  canAdd: PropTypes.bool,
  canEdit: PropTypes.bool,
  canDelete: PropTypes.bool,
};
PublicationFields.defaultProps = {
  canAdd: true,
  canEdit: true,
  canDelete: true,
};

export default PublicationFields;

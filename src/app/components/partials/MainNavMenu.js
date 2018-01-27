import React from 'react';
import { Paper, Menu, MenuItem, Divider, FontIcon }from 'material-ui';

import RemoveRedEye from 'material-design-icons/image/svg/production/ic_remove_red_eye_48px.svg';
import PersonAdd from 'material-design-icons/social/svg/production/ic_person_add_48px.svg';
import ContentLink from 'material-design-icons/content/svg/production/ic_link_48px.svg';
import ContentCopy from 'material-design-icons/content/svg/production/ic_content_copy_48px.svg';
import Download from 'material-design-icons/file/svg/production/ic_file_upload_48px.svg';
import Delete from 'material-design-icons/action/svg/production/ic_delete_48px.svg';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const MainNavMenu = () => (
  <div>
    <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
        <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
        <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
        <Divider />
        <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
        <MenuItem primaryText="Download" leftIcon={<Download />} />
        <Divider />
        <MenuItem primaryText="Remove" leftIcon={<Delete />} />
      </Menu>
    </Paper>
    <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Clear Config" />
        <MenuItem primaryText="New Config" rightIcon={<PersonAdd />} />
        <MenuItem primaryText="Project" rightIcon={<FontIcon className="material-icons">settings</FontIcon>} />
        <MenuItem
          primaryText="Workspace"
          rightIcon={
            <FontIcon className="material-icons" style={{color: '#559'}}>settings</FontIcon>
          }
        />
        <MenuItem primaryText="Paragraph" rightIcon={<b style={style.rightIcon}>¶</b>} />
        <MenuItem primaryText="Section" rightIcon={<b style={style.rightIcon}>§</b>} />
      </Menu>
    </Paper>
  </div>
);

export default MainNavMenu;

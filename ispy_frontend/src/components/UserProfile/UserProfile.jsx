import React, { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleLogout } from '@react-oauth/google';

import {
  userCreatedPinsQuery,
  userQuery,
  userSavedPinsQuery,
} from '../../utils/data';
import { client } from '../../client';
import { MasonryLayout, Spinner } from '../index';

const UserProfile = () => {
  return <div>UserProfile</div>;
};

export default UserProfile;

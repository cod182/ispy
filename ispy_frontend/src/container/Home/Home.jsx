import React, { useState, useEffect, useRef } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar, UserProfile } from '../../components/index';
import { client } from '../../client';
import logo from '../../assets/logo.png';
import Pins from '../Pins/Pins';

const home = () => {
  return <div>home</div>;
};

export default home;

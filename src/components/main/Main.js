import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';
import ManageCoursePage from './ManageCoursePage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component = {HomePage}/>
      <Route path ='/about' component = {AboutPage}/>
      <Route path ='/courses' component = {CoursesPage}/>
      <Route path ='/course' component = {ManageCoursePage}/>
      <Route path ='/course/:id' component = {ManageCoursePage}/>
    </Switch>
  </main>
)

export default Main
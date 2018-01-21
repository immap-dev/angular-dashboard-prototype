<p align="center">
<img src="toolbox-z1.png">
</p>

# angular-dashboard-prototype
Configurable Angular Dashboard Prototype
>Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.

>--Steve Jobs

## Getting Started
This project aims to solve next problems:
- Best architecure design for reportHub like applications
- Simple configuration for components layout and paths
- Design of dashboard component as main content holder
- Use of modern best practices in web development
- JSON configurable reactive forms

[Requirements Specifications](https://docs.google.com/document/d/1LV3bEluc5pPEeMZmEPIwJ_-W9K90h5zRyXvmxP8f1vc/edit?ts=5a546739#heading=h.8rcl5xthouc)

## Tasks TODO
**First Batch** 
- Develop 5 simple components: title, stats, form, map, plain html card (note: use reactive forms and material design, for data create  local fakedb service, or use online fake api)
- Develop dashboard component as host for above ones, [using next idea](https://github.com/pfitzpaddy/thinkster-django-angularjs/blob/feature-materialized/static/templates/layout/dashboard/dashboard.html), and [adapting with angular syntax](https://angular-2-training-book.rangle.io/handout/directives/ng_if_directive.html) and [e.g.](https://plnkr.co/edit/Kb0KW89265F0e9pYJ118?p=preview)
- Write basic tests for above components
- Design json or yaml configuration specs as derivative of [this idea](https://github.com/pfitzpaddy/thinkster-django-angularjs/blob/feature-materialized/static/pages/map.json), use philosophy of convention over configuration, lean principle, but having architecture with posibility to pass and overwrite any public component parameters
- Develop service for taking json or yaml config, that has route, component layout and props configuration
- Research and develop dynamic routing functionality, it is possible to pass assosiated data to routes
```javascript 
const appRoutes: Routes = [
    {
      path: 'heroes',
      component: DashComponent,
      data: { config: 'Heroes List' }
    }
  ]
  ```
- Configure simple dashboards, as next: starting plain card with picture and title that routes to dashboard, that has title, followed by stats component, followed by form component, followed map component. Form has drop down with three locations to choose, input text field as facility name, input field to enter number gt 0, and a submit button. On submit stats components shows number(default 0) with subtitle _cases_, map shows chosen place and name, title has default name plus facility name and place name.
- Use compodoc for generating documentation

**Second Batch**

- Add global navigation components
- Dashboard navigation component
- Other components
- Try to use materializeCSS
- _TO ADD MORE_

**Third Batch**

- Development of advanced configurable reactive forms, i.e. setting forms by json configuration, exploration of different solutions like [Formly](https://ng2.angular-formly.com/)
    - Analysis and classification of possible forms types required

**Forth Batch**

- User Authorization/Authentication functionality
- Design of API endpoind (REST, [GraphQL](https://www.apollographql.com/docs/angular/) )

## Built With

* [Angular](https://angular.io/) - The frontend framework used
* [Angular Material](https://material.angular.io/)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

See the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

# Code structure

Every single Angular element (component, pipe, directive, service) has its scope, and most of them are built for specific purpose rather than a global usage.
This document is to explain the approach of grouping the elements in its regarding scope by using [Angular modules](https://angular.io/guide/architecture-modules).

## What are the problems

By default, there is only one module (AppModule) within the application to declare all elements at the root level which results in problems.

- Everything is global, cannot protect the private elements.
- The dependencies are unclear, hard to tell which element actually depends on which element.
- The module declaration is tedious.
- Cannot do lazy loading.

## How to resolve the problems

Angular offers [NgModule](https://angular.io/guide/ngmodules) to help organize the code and dependency. To run the Angular project, there must be at least one root module (AppModule) in place, of course we can put everything in that root module, but it causes the above problems.
To resolve the problem, the elements should be put into multiple sub-modules, and the AppModule is a container to assemble these sub-modules collectively. Each sub-module is an independent context of a specific purpose, which means each module manages its dependencies separately other than relying on the AppModule.

## How to group by the elements

In general, these elements can be recognized as `featured` or `shared`. A featured element is created for an ad-hoc purpose, equal to the way of division of pages. A shared element is supposed to be used across multiple features, ideally decoupled from feature.

For instance, the overview component is only required by the `Overview` feature, .

Some elements (reuseable components, directives, pipes) could be used at multiple places regardless the specific feature, these could be owned by a shared module.

Besides shared module, we also introduced a core module to place the singleton services.
The reason is to prevent these services from reimporting somewhere else within the application, which means any service can be considered to be singleton should be put in the Core folder and imported in the CoreModule rather than AppModule.

```bash
app
├── overview                   # a feature module, everything just for the feature is in the module
│   ├── components
├── core                       # core module contains the singleton services
│   ├── interceptors
│   └── services
└── shared                     # shared module contains the reusable elements, like component, pipe, directive
    ├── components
    ├── directives
    └── pipes
```

Finally, every module gets imported and applied in the top module - `AppModule`, other than being imported by each other.

## References

[Sharing module](https://angular.io/guide/sharing-ngmodules)

[Feature modules](https://angular.io/guide/feature-modules)

[The thoughts behind core module](https://stackoverflow.com/questions/42695931/angular2-coremodule-vs-sharedmodule)

[App Module vs Core Module vs Shared Module vs Feature Modules in Angular](https://www.thetombomb.com/2019/11/13/app-module-vs-core-module-vs-shared-module-vs-feature-modules-in-angular/)

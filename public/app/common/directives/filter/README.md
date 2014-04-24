# Filtering and Pagination

To use the ```filter``` and ```filter-pagination``` directives, there is a little bit of setup involved.

The idea is that ```filter``` wraps up how filters are processed, and ```filter-pagination``` manages displaying pagination elements, and can send requests to the ```filter``` listener when a page change is required.

## Objects

### ```page```

JSON object that maintains pagination information.  It is passed between the client and server.  The server updates the ```page``` object with stats based on the result of a filter request.

```page``` is a property of ```filterRequest```.

The basic ```page``` object should contain the ```current``` and ```size``` properties.

	{
		// the page the user is interested in
		"current" : 2,
		// the number of items to return
		"size" : 10
	}

The server updates the ```page``` based on the result of a filter request.

	{
		"current" : 2,
		"size" : 10,
		"totalItems" : 49,
		"totalPages" : 5,
		"skip" : 10
	}

This information is required by the ```filter-pagination``` directive, and ultimately the [Angular Bootstraps](http://angular-ui.github.io/bootstrap/) ```pagination``` directive.


### ```filterRequest```

JSON that contains the filter request.  The request must contain a ```page``` object.

## ```filter``` Directive

The filter directive handles brings together a user-defined filter template, the service that performs the search, stores the state of a ```filterRequest```.

###  Attributes

#### ```template-url```

Specifies where the user defined template is located.

#### ```element-data```

```elementData``` is available in isolated scope in the user defined template.

#### ```default-filter```

The default filter.

The example that we will use, is a simple filter, that allows a user to search for a person using their first and last names.

The view HTML looks like this.

	<div class="container">
	  <div class="page-header">
	    <h1>Filter demo</h1>
	  </div>
	
	  <div class="col-lg-2">
	    <filter
	      template-url="app/filter-example/directives/filter-widget.html"
		  element-data="elementData"
		  default-filter="defaultFilter"
		  key="filterExample"
		  service-name="filterSvc"
	      results="results"
	      filter-in-progress="filterInProgress"
	      ></filter>
	  </div>
	  <div class="col-lg-10">
	    <table class="table">
	      <thead>
	        <tr>
	          <th>First name</th>
	          <th>Last name</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr ng-repeat="r in results">
	          <td>{{r.firstName}}</td>
	          <td>{{r.lastName}}</td>
	        </tr>
	      </tbody>
	    </table>
	  </div>
	</div>  



### Filter Template

```filter``` requires a template - the place where a user can enter their search parameters.

There are a few requirements for a template.

* A button must exist, with an ```ng-click="applyFilter()"``` attribute
* A button must exist, with an ```ng-click="resetFilter()"``` attribute
* Each input should be bound to ```ng-model="filterRequest.*"```, where ```*``` is the represents the value on the model.


		<form novalidate="" ng-submit="applyFilter()">
		  <div class="panel panel-default">
		    <div class="panel-heading">
		      {{elementData.message}}
		    </div>
		    <div class="panel-body">
		      <div class="form-group">
		        <label for="firstName" class="control-label">First name</label>
		        <input type="text" class="form-control input-sm" ng-model="filterRequest.firstName" name="firstName" id="firstName" />
		        <span class="help-block text-muted text-small"><i
		          class="icon-info"></i> Search by first name</span>
		      </div>
		
		      <div class="form-group">
		        <label for="lastName" class="control-label">Last name</label>
		        <input type="text" class="form-control input-sm" ng-model="filterRequest.lastName" name="lastName" id="lastName" />
		        <span class="help-block text-muted text-small"><i
		          class="icon-info"></i> Search by last name</span>
		      </div>
		    </div>
		  </div>
		
		  <div class="panel-footer">
		    <button type="button" class="btn btn-warning" ng-click="resetFilter()"><i class="icon-undo"></i> Reset</button>
		    <button type="submit" class="btn btn-info pull-right"><i class="icon-search2"></i>
		      Search
		    </button>
		    <div class="clearfix"></div>
		  </div>
		  </div>
		</form>



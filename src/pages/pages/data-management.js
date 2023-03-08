import React, { useEffect, useContext } from 'react';
import { AppSettings } from './../../config/app-settings.js';
import { Tooltip } from 'bootstrap';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css';
import 'datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.min.css';
import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');
require('datatables.net-bs5');
require('datatables.net-buttons');
require('datatables.net-buttons/js/buttons.colVis.min.js');
require('datatables.net-buttons/js/buttons.flash.min.js');
require('datatables.net-buttons/js/buttons.html5.min.js');
require('datatables.net-buttons/js/buttons.print.min.js');
require('datatables.net-buttons-bs5');
require('datatables.net-responsive');
require('datatables.net-responsive-bs5');
require('datatables.net-fixedcolumns');
require('datatables.net-fixedcolumns-bs5');

function PagesDataManagement() {
	const context = useContext(AppSettings);
  
	useEffect(() => {
		context.setAppContentClass('py-3');
		context.setAppContentFullHeight(true);
		
		var height = $(window).height() - $('#header').height() - 165;
		var options = {
			dom: "<'row'<'col-7 col-md-6 d-flex justify-content-start'f><'col-5 col-md-6 text-end'B>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5 fs-12px'i><'col-sm-12 col-md-7 fs-12px'p>>",
			scrollY:        height,
			scrollX:        true,
			paging:         false,
			fixedColumns:   {
				left: 3
			},
			order: [[1, 'asc']],
			columnDefs: [
				{ targets: 'no-sort', orderable: false }
			],
			buttons: [{ 
				extend: 'csv', 
				text: '<i class="fa fa-download fa-fw me-1"></i> Export CSV',
				className: 'btn btn-outline-default btn-sm text-nowrap rounded-2',
				footer: true
			}]
		};
	
		if ($(window).width() < 767) {
			options.fixedColumns = { left: 2 };
		}
		setTimeout(function() {
			$('#datatable').DataTable(options);
			$('[data-id="table"]').removeClass('d-none');
			$(window).trigger('resize');
		}, 150);
		
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new Tooltip(tooltipTriggerEl);
		});
		
		return function cleanUp() {
			$('.dataTables_wrapper table').DataTable().destroy(true);
		
			context.setAppContentClass('');
			context.setAppContentFullHeight(false);
		};
		
		// eslint-disable-next-line
	}, []);
  
  
	return (
		<div className="data-management d-none" data-id="table">
			<table className="table table-bordered table-xs w-100 fw-bold text-nowrap mb-3" id="datatable">
				<thead>
					<tr>
						<th className="no-sort"></th>
						<th>No.</th>
						<th>Item Name</th>
						<th>Category</th>
						<th>Stock</th>
						<th>Price</th>
						<th>Cost /unit</th>
						<th>07/2022</th>
						<th>08/2022</th>
						<th>09/2022</th>
						<th>10/2022</th>
						<th>11/2022</th>
						<th>12/2022</th>
						<th>Total Sales</th>
						<th>Total Cost</th>
						<th>Total Profit</th>
					</tr>
				</thead>
				<tbody className="text-white">
					<tr>
						<td><a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a></td>
						<td>1.</td>
						<td>iPhone 14 Pro Max - 256gb - Deep Purple</td>
						<td><span className="badge bg-theme text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">PHONE</span></td>
						<td className="text-center">25</td>
						<td>$999</td>
						<td>$899</td>
						<td>5 SOLD</td>
						<td>6 SOLD</td>
						<td>10 SOLD</td>
						<td>4 SOLD</td>
						<td>5 SOLD</td>
						<td>25 SOLD</td>
						<td>$49,950</td>
						<td>$44,950</td>
						<td className="text-success">$5,000</td>
					</tr>
					<tr>
						<td><a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a></td>
						<td>2.</td>
						<td>iPhone 14 Pro Max - 256gb - Space Black</td>
						<td><span className="badge bg-theme text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">PHONE</span></td>
						<td className="text-center">50</td>
						<td>$999</td>
						<td>$899</td>
						<td>10 SOLD</td>
						<td>16 SOLD</td>
						<td>20 SOLD</td>
						<td>14 SOLD</td>
						<td>10 SOLD</td>
						<td>55 SOLD</td>
						<td>$124,875</td>
						<td>$112,375</td>
						<td className="text-success">$12,500</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
							&nbsp;<a href="#/" className="text-warning" data-bs-toggle="tooltip" data-bs-title="Out of Stock" data-bs-html="true"><i className="fa fa-exclamation-circle"></i></a>
						</td>
						<td>3.</td>
						<td>iPhone 14 - 256gb - Space Black</td>
						<td><span className="badge bg-theme text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">PHONE</span></td>
						<td className="text-center">0</td>
						<td>$599</td>
						<td>$499</td>
						<td>5 SOLD</td>
						<td>2 SOLD</td>
						<td>1 SOLD</td>
						<td>7 SOLD</td>
						<td>15 SOLD</td>
						<td>25 SOLD</td>
						<td>$32,945</td>
						<td>$27,445</td>
						<td className="text-success">$5,500</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>4.</td>
						<td>MacBook Pro with M2 Chip - 512gb - Space Grey</td>
						<td><span className="badge bg-purple text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">LAPTOP</span></td>
						<td className="text-center">5</td>
						<td>$1,999</td>
						<td>$1,799</td>
						<td>3 SOLD</td>
						<td>5 SOLD</td>
						<td>2 SOLD</td>
						<td>10 SOLD</td>
						<td>5 SOLD</td>
						<td>20 SOLD</td>
						<td>$89,955</td>
						<td>$80,955</td>
						<td className="text-success">$9,000</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>5.</td>
						<td>MacBook Air with M2 Chip - 256gb - Space Grey</td>
						<td><span className="badge bg-purple text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">LAPTOP</span></td>
						<td className="text-center">10</td>
						<td>$1,099</td>
						<td>$899</td>
						<td>11 SOLD</td>
						<td>9 SOLD</td>
						<td>15 SOLD</td>
						<td>15 SOLD</td>
						<td>5 SOLD</td>
						<td>20 SOLD</td>
						<td>$82,425</td>
						<td>$67,425</td>
						<td className="text-success">$15,000</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>6.</td>
						<td>iMac 24-inch - 1Tb - Silver</td>
						<td><span className="badge bg-primary text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">DESKTOP</span></td>
						<td className="text-center">5</td>
						<td>$1,299</td>
						<td>$999</td>
						<td>5 SOLD</td>
						<td>4 SOLD</td>
						<td>1 SOLD</td>
						<td>10 SOLD</td>
						<td>5 SOLD</td>
						<td>10 SOLD</td>
						<td>$45,465</td>
						<td>$34,965</td>
						<td className="text-success">$10,500</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>7.</td>
						<td>iMac 24-inch - 1Tb - Blue</td>
						<td><span className="badge bg-primary text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">DESKTOP</span></td>
						<td className="text-center">10</td>
						<td>$1,299</td>
						<td>$999</td>
						<td>5 SOLD</td>
						<td>4 SOLD</td>
						<td>1 SOLD</td>
						<td>10 SOLD</td>
						<td>5 SOLD</td>
						<td>10 SOLD</td>
						<td>$45,465</td>
						<td>$34,965</td>
						<td className="text-success">$10,500</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
							&nbsp;<a href="#/" className="text-warning" data-bs-toggle="tooltip" data-bs-title="Out of Stock" data-bs-html="true"><i className="fa fa-exclamation-circle"></i></a>
						</td>
						<td>8.</td>
						<td>iMac 24-inch - 1Tb - Purple</td>
						<td><span className="badge bg-primary text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">DESKTOP</span></td>
						<td className="text-center">0</td>
						<td>$1,299</td>
						<td>$999</td>
						<td>5 SOLD</td>
						<td>4 SOLD</td>
						<td>1 SOLD</td>
						<td>10 SOLD</td>
						<td>5 SOLD</td>
						<td>10 SOLD</td>
						<td>$45,465</td>
						<td>$34,965</td>
						<td className="text-success">$10,500</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>9.</td>
						<td>Apple Watch Ultra</td>
						<td><span className="badge bg-yellow text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">WATCH</span></td>
						<td className="text-center">10</td>
						<td>$799</td>
						<td>$599</td>
						<td>2 SOLD</td>
						<td>3 SOLD</td>
						<td>5 SOLD</td>
						<td>10 SOLD</td>
						<td>0 SOLD</td>
						<td>5 SOLD</td>
						<td>$19,975</td>
						<td>$14,975</td>
						<td className="text-success">$5,000</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>10.</td>
						<td>Apple Watch Series 8</td>
						<td><span className="badge bg-yellow text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">WATCH</span></td>
						<td className="text-center">10</td>
						<td>$399</td>
						<td>$299</td>
						<td>1 SOLD</td>
						<td>5 SOLD</td>
						<td>4 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>10 SOLD</td>
						<td>$7,980</td>
						<td>$5,980</td>
						<td className="text-success">$2,000</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>11.</td>
						<td>Apple Watch SE</td>
						<td><span className="badge bg-yellow text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">WATCH</span></td>
						<td className="text-center">10</td>
						<td>$249</td>
						<td>$149</td>
						<td>1 SOLD</td>
						<td>2 SOLD</td>
						<td>4 SOLD</td>
						<td>8 SOLD</td>
						<td>0 SOLD</td>
						<td>10 SOLD</td>
						<td>$6,225</td>
						<td>$3,725</td>
						<td className="text-success">$2,500</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>12.</td>
						<td>Apple Watch Hermès</td>
						<td><span className="badge bg-yellow text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">WATCH</span></td>
						<td className="text-center">2</td>
						<td>$1,229</td>
						<td>$1,029</td>
						<td>1 SOLD</td>
						<td>0 SOLD</td>
						<td>2 SOLD</td>
						<td>3 SOLD</td>
						<td>0 SOLD</td>
						<td>4 SOLD</td>
						<td>$12,290</td>
						<td>$10,290</td>
						<td className="text-success">$2,000</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>13.</td>
						<td>Mac Mini</td>
						<td><span className="badge bg-primary text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">DESKTOP</span></td>
						<td className="text-center">2</td>
						<td>$699</td>
						<td>$599</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>1 SOLD</td>
						<td>1 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>$1,398</td>
						<td>$1,198</td>
						<td className="text-success">$200</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
							&nbsp;<a href="#/" className="text-warning" data-bs-toggle="tooltip" data-bs-title="Out of Stock" data-bs-html="true"><i className="fa fa-exclamation-circle"></i></a>
						</td>
						<td>14.</td>
						<td>Mac Studio</td>
						<td><span className="badge bg-primary text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">DESKTOP</span></td>
						<td className="text-center">0</td>
						<td>$1,999</td>
						<td>$1,599</td>
						<td>1 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>$1,999</td>
						<td>$1,599</td>
						<td className="text-success">$400</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
							&nbsp;<a href="#/" className="text-warning" data-bs-toggle="tooltip" data-bs-title="Out of Stock" data-bs-html="true"><i className="fa fa-exclamation-circle"></i></a>
						</td>
						<td>15.</td>
						<td>Studio Display</td>
						<td><span className="badge bg-primary text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">DESKTOP</span></td>
						<td className="text-center">2</td>
						<td>$1,599</td>
						<td>$1,099</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>$0</td>
						<td>$0</td>
						<td className="text-success">$0</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
							&nbsp;<a href="#/" className="text-warning" data-bs-toggle="tooltip" data-bs-title="Out of Stock" data-bs-html="true"><i className="fa fa-exclamation-circle"></i></a>
						</td>
						<td>16.</td>
						<td>Mac Pro</td>
						<td><span className="badge bg-primary text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">DESKTOP</span></td>
						<td className="text-center">2</td>
						<td>$5,999</td>
						<td>$4,999</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>$0</td>
						<td>$0</td>
						<td className="text-success">$0</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>17.</td>
						<td>Pro Display XDR</td>
						<td><span className="badge bg-primary text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">DESKTOP</span></td>
						<td className="text-center">2</td>
						<td>$4,999</td>
						<td>$3,999</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>$0</td>
						<td>$0</td>
						<td className="text-success">$0</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>18.</td>
						<td>iPad Pro 11-inch</td>
						<td><span className="badge bg-lime text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">TABLET</span></td>
						<td className="text-center">10</td>
						<td>$799</td>
						<td>$699</td>
						<td>5 SOLD</td>
						<td>1 SOLD</td>
						<td>2 SOLD</td>
						<td>2 SOLD</td>
						<td>5 SOLD</td>
						<td>15 SOLD</td>
						<td>$23,970</td>
						<td>$20,970</td>
						<td className="text-success">$3,000</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>19.</td>
						<td>iPad Pro 12.9-inch</td>
						<td><span className="badge bg-lime text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">TABLET</span></td>
						<td className="text-center">5</td>
						<td>$1,099</td>
						<td>$899</td>
						<td>2 SOLD</td>
						<td>1 SOLD</td>
						<td>0 SOLD</td>
						<td>1 SOLD</td>
						<td>0 SOLD</td>
						<td>1 SOLD</td>
						<td>$5,495</td>
						<td>$4,495</td>
						<td className="text-success">$1,000</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>20.</td>
						<td>iPad Air</td>
						<td><span className="badge bg-lime text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">TABLET</span></td>
						<td className="text-center">33</td>
						<td>$599</td>
						<td>$499</td>
						<td>12 SOLD</td>
						<td>18 SOLD</td>
						<td>15 SOLD</td>
						<td>25 SOLD</td>
						<td>10 SOLD</td>
						<td>30 SOLD</td>
						<td>$65,890</td>
						<td>$54,890</td>
						<td className="text-success">$11,000</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>21.</td>
						<td>iPad (10th gen.)</td>
						<td><span className="badge bg-lime text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">TABLET</span></td>
						<td className="text-center">29</td>
						<td>$449</td>
						<td>$339</td>
						<td>5 SOLD</td>
						<td>10 SOLD</td>
						<td>7 SOLD</td>
						<td>23 SOLD</td>
						<td>15 SOLD</td>
						<td>20 SOLD</td>
						<td>$35,920</td>
						<td>$27,120</td>
						<td className="text-success">$8,800</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>22.</td>
						<td>iPad (9th gen.)</td>
						<td><span className="badge bg-lime text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">TABLET</span></td>
						<td className="text-center">52</td>
						<td>$329</td>
						<td>$219</td>
						<td>51 SOLD</td>
						<td>23 SOLD</td>
						<td>43 SOLD</td>
						<td>23 SOLD</td>
						<td>30 SOLD</td>
						<td>15 SOLD</td>
						<td>$60,865</td>
						<td>$40,515</td>
						<td className="text-success">$20,350</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>23.</td>
						<td>iPad mini</td>
						<td><span className="badge bg-lime text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">TABLET</span></td>
						<td className="text-center">26</td>
						<td>$499</td>
						<td>$399</td>
						<td>5 SOLD</td>
						<td>10 SOLD</td>
						<td>3 SOLD</td>
						<td>2 SOLD</td>
						<td>10 SOLD</td>
						<td>15 SOLD</td>
						<td>$22,455</td>
						<td>$17,955</td>
						<td className="text-success">$4,500</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>24.</td>
						<td>AirPods (3rd generation)</td>
						<td><span className="badge bg-indigo text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">EARPHONES</span></td>
						<td className="text-center">55</td>
						<td>$169</td>
						<td>$129</td>
						<td>129 SOLD</td>
						<td>91 SOLD</td>
						<td>55 SOLD</td>
						<td>67 SOLD</td>
						<td>85 SOLD</td>
						<td>73 SOLD</td>
						<td>$84,500</td>
						<td>$64,500</td>
						<td className="text-success">$20,000</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>25.</td>
						<td>AirPods (2ND generation)</td>
						<td><span className="badge bg-indigo text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">EARPHONES</span></td>
						<td className="text-center">182</td>
						<td>$129</td>
						<td>$99</td>
						<td>43 SOLD</td>
						<td>26 SOLD</td>
						<td>74 SOLD</td>
						<td>55 SOLD</td>
						<td>25 SOLD</td>
						<td>67 SOLD</td>
						<td>$37,410</td>
						<td>$28,710</td>
						<td className="text-success">$8,700</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>26.</td>
						<td>AirPods Max</td>
						<td><span className="badge bg-indigo text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">EARPHONES</span></td>
						<td className="text-center">6</td>
						<td>$499</td>
						<td>$399</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>$0</td>
						<td>$0</td>
						<td className="text-success">$0</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>27.</td>
						<td>iPhone 13 - 128gb - Space Grey</td>
						<td><span className="badge bg-theme text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">PHONE</span></td>
						<td className="text-center">6</td>
						<td>$599</td>
						<td>$499</td>
						<td>1 SOLD</td>
						<td>0 SOLD</td>
						<td>5 SOLD</td>
						<td>4 SOLD</td>
						<td>5 SOLD</td>
						<td>15 SOLD</td>
						<td>$17,970</td>
						<td>$14,970</td>
						<td className="text-success">$3,000</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>28.</td>
						<td>iPhone 13 mini - 128gb - Red</td>
						<td><span className="badge bg-theme text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">PHONE</span></td>
						<td className="text-center">2</td>
						<td>$499</td>
						<td>$399</td>
						<td>1 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>2 SOLD</td>
						<td>$1,497</td>
						<td>$1,197</td>
						<td className="text-success">$300</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>29.</td>
						<td>iPhone SE - 64gb - Red</td>
						<td><span className="badge bg-theme text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">PHONE</span></td>
						<td className="text-center">5</td>
						<td>$429</td>
						<td>$329</td>
						<td>0 SOLD</td>
						<td>1 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>$429</td>
						<td>$329</td>
						<td className="text-success">$100</td>
					</tr>
					<tr>
						<td>
							<a href="#/" data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa fa-search"></i></a>
						</td>
						<td>30.</td>
						<td>iPhone 12 - 128gb - Purple</td>
						<td><span className="badge bg-theme text-black text-opacity-75 py-1 fs-10px my-n1 fw-bold w-100">PHONE</span></td>
						<td className="text-center">3</td>
						<td>$649</td>
						<td>$329</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>0 SOLD</td>
						<td>1 SOLD</td>
						<td>0 SOLD</td>
						<td>$649</td>
						<td>$329</td>
						<td className="text-success">$320</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th>309 SOLD</th>
						<th>241 SOLD</th>
						<th>271 SOLD</th>
						<th>304 SOLD</th>
						<th>241 SOLD</th>
						<th>457 SOLD</th>
						<th>$923,462</th>
						<th>$751,792</th>
						<th className="text-success">$171670</th>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}

export default PagesDataManagement;

import mybackgrnd from '../images/backgrnd.jpg';
import React from 'react'

import '../Styles/Home.css';
import { Component } from 'react';
const Home = () => {
  return (
    <div className='Fullhome'>
      <div class="carousel-item active">
        <img className="img" src={mybackgrnd} alt="My Image" />
        <div class="carousel-caption">
          <h3 class="prob-statement">Dropout Students</h3>

        </div>
      </div>
      <div class="total-statement totstat">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="statement-box">
                <div class="row">
                  <div class="col-md-6">
                    <h3>Total Dropout</h3>
                    <p>As per available data</p>
                  </div>
                  <div class="col-md-3">
                    <div class="hard">
                      <h3>58</h3>
                      <p>Boys</p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="soft">
                      <h3>181</h3>
                      <p>Girls</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="row catBox">
        <div class="col-md-4">
          <div class="labelBox">
            <label>Select Area</label>
          </div>
          <div class="short-by-box">
            <select name="sort-by" id="technology" class="sortByPS" fdprocessedid="3hq2lf">
            <option value="QWxs" selected="">All</option>
              <option value="QWxds" >Ahmedabad</option>
              <option value="MQ==">Surat</option>
              <option value="Mg==">Vadodara</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="labelBox">
            <label>School</label>
          </div>
          <div class="short-by-box">
            <select name="sort-by" id="category" class="sortByPS" fdprocessedid="iirtwg">
              <option value="QWxs" selected="">All</option>
              <option value="QWxss" >The riverside school</option>
              <option value="U29mdHdhcmU=">Ahmedabad International school</option>
              <option value="SGFyZHdhcmU=">DPS,Bhopal</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="labelBox">
            <label>Standard</label>
          </div>
          <div class="short-by-box">
            <select name="sort-by" id="organization" data-live-search="true" data-live-search-style="startsWith" class="sortByPS" fdprocessedid="son6y">
              <option value="QWxs" selected="">All</option>
              <option value="QUlDVEU=">1</option>
              <option value="QUlDVEUsIE1JQw==">2</option>
              <option value="QUlDVEUsIE1JQy1TdHVkZW50IElubm92YXRpb24=">3</option>
              <option value="QXV0b2Rlc2s=">4</option>
              <option value="QmFqYWogRmluc2VydiBIZWFsdGggTHRkLg==">5</option>
              <option value="R292ZXJubWVudCBvZiBHdWphcmF0">6</option>
              <option value="R292ZXJubWVudCBvZiBKYW1tdSBhbmQgS2FzaG1pcg==">7</option>
              <option value="R292ZXJubWVudCBvZiBKaGFya2hhbmQ=">8</option>
              <option value="R292ZXJubWVudCBvZiBLZXJhbGE=">9</option>
              <option value="R292ZXJubWVudCBvZiBQdW5qYWI=">10</option>
              <option value="R292dCBvZiBIaW1hY2hhbCBQcmFkZXNo">11</option>
              <option value="TWF0aFdvcmtzIEluZGlhIFByaXZhdGUgTGltaXRlZA==">12</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="labelBox">
            <label>Caste</label>
          </div>
          <div class="short-by-box">
            <select name="sort-by" id="category" class="sortByPS" fdprocessedid="iirtwg">
            <option value="QWxs" selected="">All</option>
              <option value="QWxds">OPEN</option>
              <option value="U29mdHdhcmU=">OBC</option>
              <option value="SGFyZHdhcmU=">SC/ST</option>
            </select>
          </div>
        </div>


      </div>
      <div class="row catBox1">
        <div class="col mx-1">
          <div class="radioButPS">
            <label><input type="radio" name="organization_type" value="Mg==" /> <span class="Filter_label">All</span></label>
          </div>
        </div>
        <div class="col mx-1">
          <div class="radioButPS">
            <label><input type="radio" name="organization_type" value="Mg==" /> <span class="Filter_label">Male</span></label>
          </div>
        </div>
        <div class="col mx-1">
          <div class="radioButPS">
            <label><input type="radio" name="organization_type" value="MQ==" /> <span class="Filter_label">Female</span></label>
          </div>
        </div>
      </div>
      <div class="row1">
        <div class="col-sm-12 col-md-6">
          <div class="dataTables_length" id="dataTablePS_length">
            <label>Show
              <select name="dataTablePS_length" aria-controls="dataTablePS" class="custom-select custom-select-sm form-control form-control-sm" fdprocessedid="ybembf" >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select> entries
            </label>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div id="dataTablePS_filter" class="dataTables_filter">
            <label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="dataTablePS" />
            </label>
          </div>
        </div>
      </div>
      <div className='tablecon'>
      <table className="dataEntryTable">
            <thead>
              <tr className='table-heading'>
                <th>Sr No.</th>
                <th>Full Name</th>
                <th>Standard</th>
                <th>LC No.</th>
                <th>Reason</th>
              </tr>
            </thead>
           
          </table>
      </div>
    </div>

  )
}

export default Home

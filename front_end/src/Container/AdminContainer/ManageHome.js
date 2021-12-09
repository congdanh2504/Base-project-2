import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { getReport } from '../../api/AdminAPI'
import Loading from '../../Components/Loading'
import LineChart from './LineChart'

function ManageHome() {
    const [report, setReport] = useState(null)

    useEffect(() => {
        getReport(setReport)
    }, [])

    return (
        <Container>
            {report ? <>
          <div class="row">
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div class="dash-widget-header ">
                    <span class="dash-widget-icon text-primary border-primary">
                      <i class="fa fa-users"></i>
                    </span>
                    <div class="dash-count">
                      <h3>{report.numOfUsers}</h3>
                    </div>
                  </div>
                  <div class="dash-widget-info">
                    <h6 class="text-muted">Người dùng</h6>
                    <div class="progress progress-sm">
                      <div class="progress-bar bg-primary w-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div class="dash-widget-header">
                    <span class="dash-widget-icon text-success">
                      <i class="fa fa-credit-card"></i>
                    </span>
                    <div class="dash-count">
                      <h3>{report.numOfRentItems}</h3>
                    </div>
                  </div>
                  <div class="dash-widget-info">
                    <h6 class="text-muted">Bài thuê</h6>
                    <div class="progress progress-sm">
                      <div class="progress-bar bg-success w-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div class="dash-widget-header">
                    <span class="dash-widget-icon text-danger border-danger">
                      <i class="fa fa-money-bill"></i>
                    </span>
                    <div class="dash-count">
                      <h3>{report.numOfContracts}</h3>
                    </div>
                  </div>
                  <div class="dash-widget-info">
                    <h6 class="text-muted">Hợp đồng</h6>
                    <div class="progress progress-sm">
                      <div class="progress-bar bg-danger w-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div class="dash-widget-header">
                    <span class="dash-widget-icon text-warning border-warning">
                      <i class="fa fa-folder"></i>
                    </span>
                    <div class="dash-count">
                      <h3>{report.numOfBlogs}</h3>
                    </div>
                  </div>
                  <div class="dash-widget-info">
                    <h6 class="text-muted">Blog</h6>
                    <div class="progress progress-sm">
                      <div class="progress-bar bg-warning w-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card card-chart">
                <div class="card-body">
                  <LineChart data={report.countByMonth} />
                </div>
              </div>
            </div>
          </div>
        </> : <Loading/>
        }
        </Container>
        
    )
}

export default ManageHome

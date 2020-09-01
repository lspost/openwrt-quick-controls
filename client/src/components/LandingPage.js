import React from 'react';

export default () => {
  return (
    <div
      className="grey lighten-2"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <div class="card">
        <div class="card-content">
          <h5>OpenWrt-Quick-Controls</h5>
        </div>
        <div
          class="card-action"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <a href="/auth/google" className="btn">
            Sign In with Google
          </a>
        </div>
      </div>
    </div>
  );
};

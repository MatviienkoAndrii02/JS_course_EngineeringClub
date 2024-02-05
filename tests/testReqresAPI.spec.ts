import { test, expect } from "@playwright/test";

test('GET list users', async ({ request }) => {
    const response = await request.get(`/api/users`);
    expect(response.ok()).toBeTruthy()
    let responseJson = await response.json()
    console.log(responseJson)
});

test('GET single user', async ({ request }) => {
    const response = await request.get(`/api/users/2`);
    expect(response.ok()).toBeTruthy()
});

test('GET single user not found', async ({ request }) => {
    const response = await request.get(`/api/users/211`);
    expect(response.ok()).not.toBeTruthy()
});

test('GET list resource', async ({ request }) => {
    const response = await request.get(`/api/unknown`);
    expect(response.ok()).toBeTruthy()
});

test('GET list resource not found', async ({ request }) => {
    const response = await request.get(`/api/unknown/111`);
    expect(response.ok()).not.toBeTruthy()
});

test('POST create user', async ({ request }) => {
    let userData = {
        "name": "morpheus",
        "job": "leader"
    }
    const response = await request.post(`/api/users`, {data: userData});
    expect(response.ok()).toBeTruthy()
});

test('PUT update user', async ({ request }) => {
    let userData = {
        "name": "morpheus",
        "job": "zion resident"
    }
    const response = await request.put(`/api/users/2`, {data: userData});
    expect(response.ok()).toBeTruthy()
});

test('PATCH update user', async ({ request }) => {
    let userData = {
        "name": "morpheus",
        "job": "zion resident"
    }
    const response = await request.patch(`/api/users/2`, {data: userData});
    expect(response.ok()).toBeTruthy()
});

test('DELETE delete user', async ({ request }) => {
    const response = await request.delete(`/api/users/2`);
    expect(response.ok()).toBeTruthy()
});

test('POST register successful', async ({ request }) => {
    let userData = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }
    const response = await request.post(`/api/register`, {data: userData});
    expect(response.ok()).toBeTruthy()
});

test('POST register unsuccessful', async ({ request }) => {
    let userData = {
        "email": "sydney@fife"
    }
    const response = await request.post(`/api/register`, {data: userData});
    expect(response.ok()).not.toBeTruthy()
});

test('POST login successful', async ({ request }) => {
    let userData = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
    const response = await request.post(`/api/login`, {data: userData});
    expect(response.ok()).toBeTruthy()
});

test('POST login unsuccessful', async ({ request }) => {
    let userData = {
        "email": "peter@klaven"
    }
    const response = await request.post(`/api/login`, {data: userData});
    expect(response.ok()).not.toBeTruthy()
});

test('GET delayed response', async ({ request }) => {

    const response = await request.post(`/api/users?delay=3`);
    expect(response.ok()).toBeTruthy()
});
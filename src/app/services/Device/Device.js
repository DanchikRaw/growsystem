export async function getAllDevice() {
    const res = await fetch('http://localhost:5000/api/device', {
        next: {
            revalidate: 10
        }
    });
    return res.json();
}
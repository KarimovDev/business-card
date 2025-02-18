module.exports = {
    apps: [
        {
            name: "business-card",
            script: "npm",
            args: "run start",
	    exec_mode: "cluster",
	    max_memory_restart: "300M",
	    restart_delay: "1000",
            env: {
                NODE_ENV: "production"
            }
        }
    ]
}
